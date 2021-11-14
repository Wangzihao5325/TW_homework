const DOMAIN = 'https://tw-mobile-xian.github.io';

class api {
    async request(method, url, formData) {
        let fullUrl = `${DOMAIN}/${url}`;
        let requestData = formData ? { method, body: formData } : { method };
        let response = await fetch(fullUrl, requestData);
        let responseJson = await response.json()

        if (responseJson) {
            return responseJson;
        }
        return null;
    }
}

export default new api();