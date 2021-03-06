import { Injectable } from "@angular/core";
import axios from "axios";

declare var require: any;

@Injectable({ providedIn: "root" })
export class MovieService {
  public getMedia(mediaType, pageNumber) {
    const axios = require("axios").default;
    return axios.get(
      `https://api.themoviedb.org/3/discover/${mediaType}?api_key=a108bdb43c2b3aed218f3a481c638dbb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`
    );
  }

  public getTrending(mediaType) {
    const axios = require("axios").default;
    return axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=a108bdb43c2b3aed218f3a481c638dbb`
    );
  }

  public searchMedia(mediaType, pageNumber, searchTerm) {
    const axios = require("axios").default;
    return axios.get(
      `https://api.themoviedb.org/3/search/${mediaType}?api_key=a108bdb43c2b3aed218f3a481c638dbb&language=en-US&query=${searchTerm}&page=${pageNumber}&include_adult=true`
    );
  }

  public getMediaProduct(mediaType, id) {
    const axios = require("axios").default;
    return axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=a108bdb43c2b3aed218f3a481c638dbb&language=en-US`
    );
  }

  public getMediaReviews(mediaType, id) {
    const axios = require("axios").default;
    return axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${id}/reviews?api_key=a108bdb43c2b3aed218f3a481c638dbb&language=en-US&page=1`
    );
  }

  public getPostSessionID() {
    const axios = require("axios").default;
    return axios.get(`    https://api.themoviedb.org/3/authentication/guest_session/new?api_key=a108bdb43c2b3aed218f3a481c638dbb
    `);
  }

  public submitMediaReview(mediaType, id, guestSessionID, reviewScore) {
    const axios = require("axios").default;
    return axios.post(
      `https://api.themoviedb.org/3/${mediaType}/${id}/rating?api_key=a108bdb43c2b3aed218f3a481c638dbb&guest_session_id=${guestSessionID}`,
      {
        value: reviewScore,
      }
    );
  }
}
