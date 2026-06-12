const API_URL = "https://fahim39.free.beeceptor.com/";
const searchText = "ফাত"; // change this to whatever you want

async function getFilteredList() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    // Filter by surah name (case-insensitive for English, normal for Bangla)
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    console.log(filtered);
  } catch (err) {
    console.error("Failed to fetch data:", err);
  }
}

getFilteredList();
