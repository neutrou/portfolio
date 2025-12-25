import { Button } from "../components/Button"
import { Window } from "../components/Window"

export default function Summary() {
  return (
    <Window
      type="main"
      title="Summary"
      titleFont="font-extrabold"
      color="purple"
      height="100%"
    >
      <div className="flex-1 flex flex-col gap-5">
        <Window
          type="small"
          color="red"
          width="100%"
          height="fit-content"
        >
          <div className="w-full max-w-prose border-b-2">
            <h1 className="text-2xl font-extrabold">
              Victor Algranti
            </h1>
            <h2 className="text-xl font-medium">
              Software Engineer
            </h2>
          </div>
          <div className="text-xs w-auto py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <Button text="About me" color="red" url="/about" size="small" />
        </Window>
        <Window
          type="small"
          color="blue"
          width="100%"
          height="fit-content"
        >
          <div className="w-full max-w-prose border-b-2">
            <h1 className="text-2xl font-bold pb-1">
              Projects
            </h1>
          </div>
          <ul className="text-md w-auto py-4">
            <li>- Transcendence</li>
            <li>- Red Tetris</li>
            <li>- Sentinel</li>
          </ul>
          <Button text="Projects" color="blue" url="/projects" size="small"/>
        </Window>
        <Window
          type="small"
          color="orange"
          width="100%"
          height="fit-content"
        >
          <div className="my-2">
            <h1 className="text-2xl font-bold border-b-2">
              Tech Stack
            </h1>
          </div>
          <div className="my-2">
            <div className="w-full max-w-prose py-2">
              <h2 className="text-xl font-medium">
                Languages:
              </h2>
              <ul className="text-md w-auto">
                <li>- Python</li>
                <li>- Javascript</li>
              </ul>
            </div>
            <div className="w-full max-w-prose py-2">
              <h2 className="text-xl font-medium">
                Frameworks:
              </h2>
              <ul className="text-md w-auto">
                <li>- Django</li>
                <li>- NodeJS</li>
                <li>- FastAPI</li>
              </ul>
            </div>
            <div className="w-full max-w-prose py-2">
              <h2 className="text-xl font-medium">
                ???:
              </h2>
              <ul className="text-md w-auto">
                <li>- Linux</li>
                <li>- Docker</li>
                <li>- Github</li>
              </ul>
            </div>
          </div>
          <Button text="Stack" color="orange" url="/stack" size="small"/>
        </Window>
      </div>

    </Window>
  );
}
