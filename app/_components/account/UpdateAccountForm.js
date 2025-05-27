import { updateProfile } from "../../_lib/actions"

function UpdateAccountForm({user}) {
    return (
        <form action={updateProfile} className="mt-[2rem] flex flex-col w-[300px]">
            <h2>Update Account</h2>
            <label>Full Name</label>
            <input name="fullName" defaultValue={user.fullName}></input>
            <button>submit</button>
        </form>
    )
}

export default UpdateAccountForm
