import React, { useState } from "react";

export const LoginFrom = () => {
    let [user, setUser] = useState('');
    let [password, setpassword] = useState('')

    const SubmitData = (e) => {
        e.preventDefault();
        console.log(user, password);

    }

    const userData = (event) => {
        setUser(event.target.value);
    }

    return (
        <>
            <form onSubmit={SubmitData}>
                <label htmlFor="">Username:
                    <input value={user} type="text" onChange={userData} />
                </label>

                <label htmlFor="">Password:
                    <input value={password} type="password" onChange={event => setpassword(event.target.value)} />
                </label>

                <button>submit   </button>
            </form>
        </>
    )
}