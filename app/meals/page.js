import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meal-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}
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
        <Suspense fallback={<p className={classes.loading}>Fetching meals</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
