import { useState } from "react";
import { AuthUser } from "../context/UserContext";

export const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser);
    //const [user, setUser] = useState<AuthUser | null>(null)

    const handleLogin = () => {
        setUser({
            id: 1,
            name: 'Marcio',
            email: 'email@test.com'
        })
    }

    const handleLogout = () => {
        setUser({} as AuthUser);
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User id is {user?.id}</div>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}