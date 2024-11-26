import { GlobalStore } from "@/lib/store";
import { toggleTheme, setTheme } from "@/lib/features/Theme/themeSlice";

export const initializeTheme = () => {
  const currentTheme = localStorage.getItem("theme");
  GlobalStore.dispatch(setTheme(currentTheme || 'light'));

  if (currentTheme === "dark") {
    document.documentElement.classList.add("dark");
  }
};

export const handleToggleTheme = () => {
  const currentTheme = localStorage.getItem("theme");
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem("theme", newTheme);
  document.documentElement.classList.toggle("dark", newTheme === "dark");
  GlobalStore.dispatch(toggleTheme());
};
