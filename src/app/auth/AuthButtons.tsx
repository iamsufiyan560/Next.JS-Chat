import { Button } from "@/components/ui/button";

const AuthButtons = () => {
  return (
    <div className="flex gap-3 flex-1 md:flex-row flex-col relative z-50">
      <div className="flex-1">
        <Button className="w-full bg-white text-black hover:bg-slate-200">
          Sign up
        </Button>
      </div>
      <div className="flex-1">
        <Button className="w-full text-black hover:bg-sky-500 bg-sky-400">
          Login
        </Button>
      </div>
    </div>
  );
};

export default AuthButtons;
