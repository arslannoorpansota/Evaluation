import { useForm } from "react-hook-form";
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useRouter } from 'next/router';

const firebaseConfig = {
    apiKey: "AIzaSyBeVOxr4NAgWDLYiF2FVY2xvQb2wHL-4pk",
    authDomain: "evaluation-b5746.firebaseapp.com",
    projectId: "evaluation-b5746",
    storageBucket: "evaluation-b5746.appspot.com",
    messagingSenderId: "147488666674",
    appId: "1:147488666674:web:471b09cbe0334243aa382b",
    measurementId: "G-TVEX6S9ZSL"
  };
  const getAppInstance = () => {


    if (firebase.apps.length) {
        return firebase.apps[0];
    } else {
        return firebase.initializeApp(firebaseConfig);
    }
}
export const adminClient = getAppInstance();

export default function Register() {
    const db = firebase.firestore();
    const router = useRouter();

    if (typeof window !== "undefined") {
        const email = localStorage.getItem("email");
        if (email) {
            router.push('/');
        }
    }

    const form = useForm({ mode: 'onBlur' });
    const { register, handleSubmit, getValues } = useForm();



    async function addUser(data) {
        const emailDoc = await db.collection("users").where("email", "==", getValues("email")).get()
        if (!emailDoc.empty) {
            alert("This email is already taken!");
        }
        else {
            db.collection('users').add({
                password: getValues("email"),
                email: getValues("email"),
            });
        localStorage.setItem("email", getValues("email"));
        router.push('/');
        }
    }
    return (
        <div className="h-screen overflow-hidden flex flex-col-reverse md:flex-row">
            <div className="h-1/2 md:w-1/2">

                <form id="signup" onSubmit={form.handleSubmit(addUser)} className=" py-48 p-12">
                    <div className="flex justify-center">
                        <div className=""><svg width="88" height="87" viewBox="0 0 88 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M41.3732 -0.000545629C44.304 -0.0871153 47.2024 0.172594 50.1007 0.23211C51.8777 0.269985 53.6546 0.367376 55.4315 0.480998C59.0699 0.659645 62.6751 1.26066 66.1744 2.27191C69.4115 3.21177 72.4731 4.67388 75.2378 6.60039C77.872 8.47795 80.1043 10.8619 81.8038 13.6125C83.671 16.7042 84.9853 20.0967 85.6881 23.6384C86.34 26.7413 86.7799 29.8849 87.0046 33.0474C87.1563 34.9249 87.2321 36.8349 87.2863 38.6907C87.3405 40.5465 87.335 42.4781 87.2863 44.3556C87.2321 47.1637 87.1183 49.9718 87.0046 52.7799C86.9287 54.533 86.8583 56.286 86.647 58.0282C86.3701 60.3572 85.9228 62.6629 85.3089 64.9267C84.8836 66.5483 84.3534 68.1405 83.7216 69.6935C82.6152 72.3058 81.0728 74.7117 79.1601 76.8084C77.7148 78.407 76.0771 79.8208 74.2843 81.0179C72.0659 82.4502 69.6593 83.5682 67.1333 84.34C64.7496 85.0942 62.3041 85.6373 59.8251 85.9632C57.1164 86.3419 54.3372 86.5042 51.5797 86.6557C48.8222 86.8072 45.951 86.7802 43.1339 86.7423C41.1077 86.7098 39.0762 86.6774 37.0446 86.607C34.6718 86.5205 32.2989 86.4123 29.9261 86.1742C26.9511 85.9059 24.002 85.403 21.1064 84.67C17.8947 83.8175 14.8804 82.3472 12.2326 80.3416C9.64914 78.414 7.43109 76.0412 5.68286 73.3348C3.86106 70.5389 2.6041 67.4143 1.98273 64.1368C1.58725 62.0699 1.24053 60.0031 0.964243 57.92C0.736709 56.1994 0.556126 54.477 0.422495 52.7529C0.108282 49.2865 -0.0325725 45.8309 -6.76789e-05 42.3861C0.0360488 39.5582 0.182321 36.7303 0.438748 33.9023C0.617524 31.9383 0.828806 29.9796 1.12677 28.0318C1.46785 25.3274 1.99642 22.65 2.70867 20.0187C3.85093 16.1335 5.89232 12.5711 8.66789 9.61951C11.3164 6.84585 14.5569 4.70425 18.1485 3.35403C21.2576 2.17799 24.4941 1.36991 27.7916 0.946311C30.2782 0.594621 32.7757 0.40525 35.2785 0.210468C37.3209 0.0697922 39.3525 -0.0384199 41.3732 -0.000545629Z" fill="#1918FF" />
                            <path d="M68.5311 43.9015V54.1059C68.5311 54.931 68.2029 55.7223 67.6187 56.3057C67.0345 56.8892 66.2422 57.217 65.416 57.217C64.5899 57.217 63.7976 56.8892 63.2134 56.3057C62.6292 55.7223 62.301 54.931 62.301 54.1059V43.9015C62.301 39.4594 58.8121 35.8397 54.5215 35.8397C50.2309 35.8397 46.7854 39.4485 46.7691 43.8798C46.4874 51.3465 40.0894 57.3522 32.2503 57.3522H22.0329C21.2082 57.3522 20.4172 57.025 19.8341 56.4426C19.2509 55.8602 18.9233 55.0702 18.9233 54.2465C18.9233 53.4229 19.2509 52.6329 19.8341 52.0505C20.4172 51.4681 21.2082 51.1409 22.0329 51.1409H32.2503C36.7034 51.1409 40.3331 47.6672 40.3331 43.3766C40.3331 39.086 36.7034 35.6178 32.2503 35.6178H22.0329C21.614 35.6353 21.1959 35.568 20.8037 35.4199C20.4115 35.2719 20.0533 35.0461 19.7507 34.7563C19.4481 34.4664 19.2073 34.1184 19.0428 33.7332C18.8783 33.348 18.7935 32.9336 18.7935 32.5148C18.7935 32.0961 18.8783 31.6817 19.0428 31.2965C19.2073 30.9113 19.4481 30.5633 19.7507 30.2734C20.0533 29.9836 20.4115 29.7578 20.8037 29.6098C21.1959 29.4617 21.614 29.3944 22.0329 29.4119H32.2503C34.4368 29.4003 36.5983 29.8767 38.5769 30.8063C40.5555 31.7358 42.3012 33.095 43.6866 34.7846C44.9637 33.1242 46.6037 31.777 48.4814 30.8459C50.3592 29.9148 52.4251 29.4243 54.5215 29.4119C62.2577 29.401 68.5311 35.91 68.5311 43.9015Z" fill="white" />
                        </svg>
                        </div>
                        <div className="flex items-center">
                            <div className="text-3xl font-medium items-center"><span className="text-indigo-800">Career</span> network<span className="text-indigo-800">.co</span></div>
                        </div>
                        <div className="p-4">TM</div>
                    </div>
                    <div className="pt-12">
                        <input
                            {...register("email")} placeholder="Email" required id="email" type="email" autoComplete="email"
                            className="appearance-none shadow-sm block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 sm:text-sm focus:z-10 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="pt-4">
                        <input
                            {...register("password")} id="password" required type="password" autoComplete="password" placeholder="Password"
                            className="appearance-none shadow-sm block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 sm:text-sm focus:z-10 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="flex justify-center pt-4">
                        <div className="pt-2">
                            <button className=" rounded-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>


            <div>
                <img src="/unsplash_PhYq704ffdA.jpg"></img>
            </div>

        </div>
    )
}