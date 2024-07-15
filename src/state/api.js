import axios from 'axios';
export const getArticles= async () => {
    return await axios.get("http://www.24-crm.online/webservice/api/ARTICLEs?coddos=GEDcom&serveur=/]QPMFD&user=tb&pwd=Qpmztpgubinfenf{hboj3135&database=PSGEDcom");
  }
