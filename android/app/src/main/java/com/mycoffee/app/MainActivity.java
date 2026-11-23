package com.mycoffee.app;

import android.os.Bundle;
import android.webkit.CookieManager;
import android.webkit.WebView;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        // Allow OAuth cookies across Google -> Vercel redirects
        WebView webView = getBridge().getWebView();
        CookieManager.getInstance().setAcceptThirdPartyCookies(webView, true);
    }
}
