export const getAnimesData = async (vars: {},) => {
  const query = `query ($id: Int, $page: Int, $perPage: Int, $search: String, $format: MediaFormat) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (id: $id, search: $search, format: $format) {
        id
        averageScore
        title {
          english
          romaji
          native
        }
        coverImage {
          medium
          large
        }
        genres
        
      }
    }
  }`;

  var variables = vars;

  const url = 'https://graphql.anilist.co',
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: query,
        variables: variables
      })
    };

  return await fetch(url, options)
}