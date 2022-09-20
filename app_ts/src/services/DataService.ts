// eslint-disable-next-line
/* eslint-disable */

import http from "../http-common";

class DataService {
      
    get(type: any) {
      return http.get('/'+ type);
    }
    create(type: any,data: any) {
      return http.post("/"+ type, data);
    }
    update(id: string, data: any) {
      return http.put('/${id}', data);
    }
    delete(id: string) {
      return http.delete('/${id}');
    }
  }
  
  export default new DataService();
