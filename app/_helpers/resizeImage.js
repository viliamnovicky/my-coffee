export async function resizeImage(file, targetWidth = 800, targetRatio = 1, quality = 0.9) {
  const img = document.createElement("img");
  img.src = URL.createObjectURL(file);

  await new Promise((resolve) => {
    img.onload = resolve;
  });

  // Compute target height based on desired aspect ratio
  const targetHeight = targetWidth / targetRatio;

  // Create canvas
  const canvas = document.createElement("canvas");
  canvas.width = targetWidth;
  canvas.height = targetHeight;

  const ctx = canvas.getContext("2d");

  // Draw image centered and cropped
  const inputAspect = img.width / img.height;
  const outputAspect = targetWidth / targetHeight;

  let sx = 0, sy = 0, sw = img.width, sh = img.height;

  if (inputAspect > outputAspect) {
    // Crop width
    sw = img.height * outputAspect;
    sx = (img.width - sw) / 2;
  } else {
    // Crop height
    sh = img.width / outputAspect;
    sy = (img.height - sh) / 2;
  }

  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, targetWidth, targetHeight);

  // Convert canvas to Blob
  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), "image/jpeg", quality);
  });
}

