
import "../App.css";
import('tailwindcss').Config;

export function SignUp(){
    return (
        <div className="h-fit p-4 w-1/2">
            <h1 className="text-center p-3">Sign Up</h1>
            <p className="p-2 text-2xl">Enter your information to create an account</p>
            <form className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                    <input type="text" placeholder="John" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"></input>
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                    <input type="text" placeholder="Doe" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"></input>
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="text" placeholder="johndoe@example.com" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"></input>
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"></input>
                </div>
            </form>
        </div>
    );
}