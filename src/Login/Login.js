import { useEffect, useState } from "react";
import { Modal, Button, Label, TextInput, Checkbox } from "flowbite-react";
import { useNavigate, useLocation } from "react-router-dom";
import useSWR from "swr";

export default function Login() {
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onClose = () => {
    setShow(false);
    navigate("/");
  };

  const onLogin = async () => {
    const currentUser = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username: email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("current user", currentUser);

    if (currentUser) {
      navigate("/");
    }
  };

  return (
    <Modal show={show} size="md" popup={true} onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in
          </h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              placeholder="name@company.com"
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              required={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <a
              href="/modal"
              className="text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Forgot Password?
            </a>
          </div>
          <div className="w-full">
            <Button onClick={() => onLogin()}>Log in to your account</Button>
          </div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <a
              href="/modal"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </a>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
