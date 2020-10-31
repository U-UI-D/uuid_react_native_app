import storage from '../storage/storage';

export default class StorageUtils{
  static getItem = async (key) => {
    console.log("================ StorageUtils getItem ================");
    let result = {res: null, err: null};
    let promise = storage.load({key: key, autoSync: false}).then(res => {
      console.log('storage load succ', res);
      result.res = res;
    }).catch(err => {
      console.log('storage load err', err);
      result.res = err;
    });

    return await promise;
  }


  static setItem = async (key, value) =>  {
    console.log("================ StorageUtils setItem ================");
    let result = {res: null, err: null};
    let promise = storage.save({key: key, data: JSON.stringify(value)})
      .then(res => {
        result.res = res;
        console.log('storage save succ', res);
      }).catch(err => {
        result.res = err;
      console.log('storage save err', err);
    });

    return await promise;
  }
}
