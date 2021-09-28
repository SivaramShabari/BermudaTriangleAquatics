import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import logo from '../images/logo.jpg';

function Navbar({ user }) {
    const auth = getAuth();
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-white ">
            <a class="navbar-brand" href="#">
                <img src={logo} height="80" class="d-inline-block align-top" alt="" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="btn nav-link" href="/">Home</a>
                    </li>
                    {!user &&
                        <li class="nav-item">
                            <a class="btn nav-link" href='/signin'>Sign In</a>
                        </li>
                    }
                    {user && <>
                        <li class="nav-item">
                            <a class="btn nav-link"
                                onClick={
                                    () => {
                                        signOut(auth).then(() => {
                                            alert('Signed Out');
                                            window.location.href = '/';
                                        }).catch((error) => {
                                            alert(error.message);
                                        });
                                    }
                                }
                            >Signout</a>
                        </li>
                        <li class="nav-item">
                            <a class="btn nav-link" href="/admin">Admin</a>
                        </li>
                        <li class="nav-item">
                            <a class="btn nav-link" href="/admin/bills">Your Bills</a>
                        </li>
                    </>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
