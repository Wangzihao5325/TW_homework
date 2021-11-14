import Api from '../meta';

export const get = async () => {
    let response = await Api.request('GET', 'moments-data/user.json');
    return response;
}