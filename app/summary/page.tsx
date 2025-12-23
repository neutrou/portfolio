import { Button } from "../components/Button"
import { Window } from "../components/Window"

export default function Summary() {
  return (
    <Window
      title="Summary"
      titleFont="font-extrabold"
      color="purple"
      height="100%"
    >
      <div className="flex-1 flex flex-col gap-5">
        <Window
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
          color="blue"
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
          <Button text="Projects" color="blue" url="/projects" size="small"/>
        </Window>
      </div>

    </Window>
  );
}
