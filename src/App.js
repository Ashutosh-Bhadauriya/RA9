import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  javascript: [
    {
      name: "Javascript the good part",
      rating: "4/5",
      description: "This book outlines the good bits of the language"
    },
    {
      name: "You Don't Know JS",
      rating: "3.5/5",
      description:
        " It dives into trickier parts of the language that many JavaScript programmers avoid"
    },
    {
      name: "Eloquent JavaScript",
      rating: "4/5",
      description:
        "This is a book about JavaScript, programming, and the wonders of the digital."
    },
    {
      name: "Effective Javascript",
      rating: "3.5/5",
      description: "Effective JavaScript by Dave Herman is a must-read"
    }
  ],

  fiction: [
    {
      name: "The Great gatsby",
      rating: "4/5",
      description:
        "Nominated as one of America's best-loved novels by PBS's The Great American Read."
    },
    {
      name: "Jane Eyre",
      rating: "5/5",
      description:
        "The novel follows the story of Jane, a seemingly plain and simple girl as she battles through life's struggles."
    },
    {
      name: "One Hundred Years of Solitude",
      rating: "4.5/5",
      description:
        "One Hundred Years of Solitude is a landmark 1967 novel by Colombian author Gabriel García Márquez that tells the multi-generational story"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5",
      description: "No need of description for this book."
    },
    {
      name: "The kite runner",
      rating: "4/5",
      description:
        "The Kite Runner is the first novel by Afghan-American author Khaled Hosseini. It tells story of Amir the afghan boy"
    }
  ],

  nonfiction: [
    {
      name: "Educated",
      rating: "4.5/5",
      description:
        "Tara Westover's book “Educated” is a distressing & discomforting - alarming & startling exposure of her Mormon fundamentalist family."
    },
    {
      name: "In cold blood",
      rating: "4/5",
      description:
        "In Cold Blood is a non-fiction novel by American author Truman Capote, first published in 1966."
    },
    {
      name: "The sixth extinction",
      rating: "5/5",
      description:
        "The sixth extinction is a wonderful book on the challenges in maintaining the bio-diversity. "
    },
    {
      name: "Silent Spring",
      rating: "4.5/5",
      description:
        "Silent Spring is an environmental science book by Rachel Carson. "
    },
    {
      name: "Hiroshima",
      rating: "3.7/5",
      description:
        "Hershey's book follows the lives of six individuals who survived the sheer devastation caused by the dropping of the Atomic Bomb in Hiroshima."
    }
  ],
  selfImprovement: [
    {
      name: "How to win friends or influence people",
      rating: "5/5",
      description:
        "The book basically tells you to be agreeable to everybody, find something to honestly like about them and compliment them on it."
    },
    {
      name: "The four hour workweek",
      rating: "4.5/5",
      description:
        "The 4-Hour Workweek is a new way of solving a very old problem."
    },
    {
      name: "Rich Dad Poor Dad",
      rating: "4.5/5",
      description:
        "Robert Kiyosaki (Rich Dad Poor Dad) offers personal finance education to help you learn about cash flow, real estate, investing, and business building."
    },
    {
      name: "The power of positive thinking",
      rating: "3.5/5",
      description:
        "An international bestseller with over five million copies in print, The Power of Positive Thinking has helped men and women around the world."
    },
    {
      name: "Atomic Habits",
      rating: "4.5/5",
      description:
        "Atomic Habits is the most comprehensive and practical guide on how to create good habits, break bad ones, and get 1 percent better every day. "
    }
  ],
  comics: [
    {
      name: "Maus",
      rating: "4.5/5",
      description:
        "Maus is a graphic novel by American cartoonist Art Spiegelman. Serialized from 1980 to 1991, it depicts Spiegelman interviewing his father"
    },
    {
      name: "Far Sector",
      rating: "3.5/5",
      description:
        "Jemisin's brilliance! Far Sector is her take on the Green Lantern character"
    },
    {
      name: "Saga",
      rating: "5/5",
      description:
        "Star-crossed lovers Marko and Alana and their baby Hazel are still on the run in Saga"
    },
    {
      name: "Raj Comics",
      rating: "4.5/5",
      description: "Do you need description for this?"
    },
    {
      name: "X of swords",
      rating: "4.5/5",
      description:
        "X of Swords is a comic book crossover event which debuted in September 2020, being published by Marvel Comics."
    }
  ],

  business: [
    {
      name: "Outliers",
      rating: "3.5/5",
      description:
        "Malcolm Gladwell takes us on an intellectual journey through the world of outliers the best and the brightest"
    },
    {
      name: "Good to Great",
      rating: "5/5",
      description:
        "Good to great summarises the findings from extensive research into what makes certain high performing companies outperform their peers."
    },
    {
      name: "Start with why",
      rating: "4/5",
      description:
        "Simon Sinek started a movement to help people become more inspired at work, and in turn inspire their colleagues and customers."
    },
    {
      name: "Business Adventures",
      rating: "5/5",
      description:
        "Bill Gates shares his thoughts on his favorite business book, “Business Adventures” by John Brooks, which was recommended to him by Warren Buffett."
    },
    {
      name: "Deep Work",
      rating: "3/5",
      description:
        "Deep work is the ability to focus without distraction on a cognitively demanding task."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Some Great Books </h1>
      <p>Some great books you should read</p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div className="book-names" style={{ textAlign: "left" }}>
        <ul>
          {bookDB[selectedGenre].map((book) => (
            <li key={book.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <p style={{ fontSize: "smaller" }}>{book.description}</p>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
