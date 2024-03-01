
// export const fetchData = async (movieId, setData, setIsLoading) => {
//   try {
//     const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=YOUR_API_KEY`);
//     const data = await response.json();
//     setData(data);
//     setIsLoading(false);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     setIsLoading(false); // Assurez-vous d'appeler setIsLoading(false) dans le bloc catch aussi
//   }
// }
export const fetchData = async (setData,setIsLoading) => {
  try {
    const response = await fetch("https://example-data.draftbit.com/books");
    const data = await response.json();
    setData(data);
    setIsLoading(false)
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
