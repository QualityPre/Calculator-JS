'use strict';
const banana = function () {
  var newReleases = [
    {
      id: 70111470,
      title: 'Die Hard',
      boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
      uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
      rating: [4.0],
      bookmark: [],
    },
    {
      id: 654356453,
      title: 'Bad Boys',
      boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
      uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
      rating: [5.0],
      bookmark: [{ id: 432534, time: 65876586 }],
    },
    {
      id: 65432445,
      title: 'The Chamber',
      boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
      uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
      rating: [4.0],
      bookmark: [],
    },
    {
      id: 675465,
      title: 'Fracture',
      boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
      uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
      rating: [5.0],
      bookmark: [{ id: 432534, time: 65876586 }],
    },
  ];
  // videoAndTitlePairs = [];

  //   newReleases.forEach(t => {
  //     videoAndTitlePairs.push({ id: t.id, title: t.title });
  //   });
  //   console.log(videoAndTitlePairs);
  // return videoAndTitlePairs

  //   return newReleases.map(t => {
  //     return { id: t.id, title: t.title };
  //   });

  return newReleases.filter(t => t.rating == 5.0).map(t => t.id);
};
banana();

const cucumber = function () {
  var movieLists = [
      {
        name: 'New Releases',
        videos: [
          {
            id: 70111470,
            title: 'Die Hard',
            boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
            uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: 4.0,
            bookmark: [],
          },
          {
            id: 654356453,
            title: 'Bad Boys',
            boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
            uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: 5.0,
            bookmark: [{ id: 432534, time: 65876586 }],
          },
        ],
      },
      {
        name: 'Dramas',
        videos: [
          {
            id: 65432445,
            title: 'The Chamber',
            boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
            uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: 4.0,
            bookmark: [],
          },
          {
            id: 675465,
            title: 'Fracture',
            boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
            uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: 5.0,
            bookmark: [{ id: 432534, time: 65876586 }],
          },
        ],
      },
    ],
    allVideoIdsInMovieLists = [];

  // ------------   INSERT CODE HERE!  -----------------------------------
  // Use two nested forEach loops to flatten the movieLists into a list of
  // video ids.
  // ------------   INSERT CODE HERE!  -----------------------------------

  //   movieLists.forEach(movie =>
  //     movie.videos.forEach(title => allVideoIdsInMovieLists.push(title.id))
  //   );
  //   return allVideoIdsInMovieLists;
};

const dooper = function () {
  var ratings = [2, 3, 1, 4, 5];

  // You should return an array containing only the largest rating. Remember that reduce always
  // returns an array with one item.
  return ratings.reduce((acc, cur) => {
    if (acc > cur) {
      return acc;
    } else return cur;
  });
};
// the url of the largest box art.
const e = function () {
  var boxarts = [
    {
      width: 200,
      height: 200,
      url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg',
    },
    {
      width: 150,
      height: 200000,
      url: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg',
    },
    {
      width: 3000,
      height: 200,
      url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg',
    },
    {
      width: 425,
      height: 150,
      url: 'http://cdn-0.nflximg.com/images/2891/Fracture425.jpg',
    },
  ];

  const trytoo = boxarts.reduce((acc, cur) => {
    if (acc.width * acc.height > cur.width * cur.height) return acc;
    else return cur;
  });

  return trytoo.url;
};
