import { useProgress } from "@react-three/drei";

const Loader = () => {
  const { active, progress } = useProgress();

  if (!active) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary text-xl font-normal"
      role="status"
      aria-live="polite"
    >
      {Math.round(progress)}% Loaded
    </div>
  );
};

export default Loader;
