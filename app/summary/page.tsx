import { AboutButton } from "../components/Button"
import { MainWindow, SimpleWindow } from "../components/Window"

export default function Summary() {
  return (
    <section className="size-full">
      <MainWindow title="Summary" color="purple">
        <div
          className="flex-1 flex flex-row"
        >
          <SimpleWindow
            color="red"
            width="fit-content"
            height="fit-content"
          >
            <div className="w-fit border-b-2">
              <h1 className="text-[50px] font-extrabold">
                Victor Algranti
              </h1>
              <h2 className="text-[40px] font-medium">
                Software Engineer
              </h2>
            </div>
            <div className="text-[20px] w-auto py-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <AboutButton/>
          </SimpleWindow>
        </div>

      </MainWindow>
    </section>
  );
}
