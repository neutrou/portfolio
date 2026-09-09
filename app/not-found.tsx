import Separator from "@/app/components/Separator"

export default function NotFound() {
  return (
    <div className="size-full flex items-center justify-center">
      <div className="flex flex-row gap-2.5 items-center justify-center h-20 text-lg text-text-primary">
        <h1>404</h1>
        <Separator className="w-0.5 h-full" orientation="vertical" />
        <h1>Page Not Found</h1>
      </div>
    </div>
    );
}