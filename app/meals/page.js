import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meal-grid";
export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals, Created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>choose your favorite recipes and cook yourself</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your recipes</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
