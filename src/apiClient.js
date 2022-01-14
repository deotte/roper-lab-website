/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */

class ApiClient {
  constructor(url) {
    this.apiUrl = url;
    this.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
  }

  async getPublications() {
    try {
      const httpResponse = await fetch(`${this.apiUrl}?query=Randall%20Roper&format=JSON&sort_date=y&resultType=core`);
      const response = await httpResponse.json();
      const articles = response.resultList.result;

      return this.articlesResponse(articles);
    } catch (error) {
      console.log(error);
    }
  }

  // Get article URL
  articleUrl(article) {
    const articleUrls = article.fullTextUrlList.fullTextUrl;
    const doiUrlObj = articleUrls.find((urlObj) => urlObj.site === 'DOI');

    if (doiUrlObj !== (undefined || null)) {
      return doiUrlObj.url;
    } else {
      return `https://europepmc.org/article/MED/${article.pmid}`;
    }
  }

  // Get publishing journal of article
  getJournal(article) {
    return article.journalInfo.journal.medlineAbbreviation;
  }

  // Take in articles, return array of article objects to use in publications component
  articlesResponse(articles) {
    return articles.reduce((finalArray, article) => {
      let newArticle = finalArray.find((item) => item.id === article.id);

      if (newArticle === undefined) {
        newArticle = {};

        newArticle.url = this.articleUrl(article);
        newArticle.pmId = article.pmid;
        newArticle.pmcId = article.pmcid === undefined ? null : article.pmcid;
        newArticle.date = article.firstPublicationDate;
        newArticle.journal = this.getJournal(article);
        newArticle.authors = article.authorString;
        newArticle.title = article.title;
  
        finalArray.push(newArticle);
      }

      return finalArray;
    }, []);
  }
}

export default ApiClient;