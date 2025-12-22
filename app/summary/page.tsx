import { AboutButton, ProjectsButton } from "../components/Button"
import { Window } from "../components/Window"

export default function Summary() {
  return (
    <Window title="Summary" titleFont="font-extrabold" color="purple">
      <div
        className="
					flex-1 flex flex-col gap-20
					lg:flex-row lg:gap-40"
      >
        <Window
          color="red"
          width="100vw lg:20vw"
          height="fit-content"
        >
          <div className="w-full max-w-prose border-b-2">
            <h1 className="text-5xl font-extrabold">
              Victor Algranti
            </h1>
            <h2 className="text-3xl font-medium">
              Software Engineer
            </h2>
          </div>
          <div className="text-[16px] w-auto py-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <AboutButton/>
        </Window>
        <Window
          color="blue"
          width="100vw lg:40vw"
          height="fit-content"
        >
          <div className="w-full max-w-prose border-b-2">
            <h1 className="text-5xl font-extrabold">
              Victor Algranti
            </h1>
            <h2 className="text-3xl font-medium">
              Software Engineer
            </h2>
          </div>
          <div className="text-[16px] w-auto py-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <ProjectsButton/>
        </Window>
      </div>

    </Window>
  );
}
