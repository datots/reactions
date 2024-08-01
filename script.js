const categoriesElement = document.getElementById("category");

async function fetchedData() {
  try {
    const res = await fetch("./data.json");
    if (!res.ok) {
      throw new Error("Network response was not ok " + res.statusText);
    }
    const data = await res.json();

    const styles = {
      Reaction: { backgroundColor: "hsl(0, 100%, 67%)", color: "red" },
      Memory: { backgroundColor: "hsl(39, 100%, 56%)", color: "yellow" },
      Verbal: { backgroundColor: "hsl(166, 100%, 37%)", color: "green" },
      Visual: { backgroundColor: "hsl(234, 85%, 45%)", color: "blue" },
    };

    const categoryList = data
      .map((cat) => {
        const style = styles[cat.category];
        return `<li style="background-color: ${style.backgroundColor}; color: ${style.color};">
          <img src="${cat.icon}" alt="${cat.category} icon" />${cat.category}:
          ${cat.score} / 100
        </li>`;
      })
      .join("");
    categoriesElement.innerHTML = categoryList;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

fetchedData();
