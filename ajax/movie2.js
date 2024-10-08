const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

init = () => {
  // 오늘 날짜 구한 뒤 날짜를 화면에 보여주기
  const now = new Date();

  const year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate() - 1;

  txtYear.value = year;
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  selMon.value = month;
  selDay.value = day;
};

init();

getMovie = () => {
  // 년, 월, 일 가져오기

  // url
  let url =
    "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=";
  // url + 년, 월, 일
  url += txtYear.value + selMon.value + selDay.value;
  console.log(url);
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("주소 확인");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.boxOfficeResult.dailyBoxOfficeList);
      const movies = data.boxOfficeResult.dailyBoxOfficeList;
      let str = "<tr>";
      movies.forEach((movie) => {
        str += `<td> ${movie.rank} 위</td>`;

        str += "<td>";
        let rankInten = parseInt(movie.rankInten);
        if (rankInten > 0) {
          str += `▲`;
        } else if (rankInten < 0) {
          str += `▼`;
        } else {
          str += ` `;
        }
        str += `${rankInten} )</td>`;
        str += `<td> ${movie.movieNm}</td>`;
        str += `<td>${movie.openDt}</td>`;
        str += `<td>${movie.audiCnt}</td>`;
        str += `<td>${movie.audiAcc}</td>`;
        str += `</tr>`;
      });
      document.querySelector(".table tbody").innerHTML = str;
      // invisible 클래스명 제거
      document
        .querySelector(".container .row:nth:-child(3)")
        .classList.remove("invisible");
    })
    .catch((error) => console.log(error));
};

document.querySelector(".btn-secondary").addEventListener("click", getMovie);
