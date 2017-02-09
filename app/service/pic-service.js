'use strict';

//NOTE: Upload dependency comes from ng-file-upload
module.exports = ['$log', '$q', '$http', 'Upload', 'authService', picService];

const galleryUrl = `${__API_URL__}/api/gallery`;

function picService($log, $q, $http, Upload, authService) {
  $log.debug('picService()');

  let service = {};

  //TODO: Consider how to refactor this into a lib module.
  function errors(err) {
    $log.error(err.message);
    return $q.reject(err);
  }

  const makeConfig = require('./lib/make-config.js');

  service.deleteGalleryPic = function(gallery, pic) {
    $log.debug('picService.deleteGalleryPic()');

    $log.debug('gallery:',gallery);
    $log.debug('    pic:',pic);

    return authService.getToken()
    .then( token => {
      let url = `${galleryUrl}/${gallery._id}/pic/${pic._id}`;
      return $http.delete(url, makeConfig(token));
    })
    .then( res => {
      let index = gallery.pics.indexOf(pic);
      gallery.pics.splice(index, 1);
      return res.data;
    })
    .catch(errors);
  };

  service.uploadGalleryPic = function(gallery, pic) {
    $log.debug('picService.uploadGalleryPic()');

    return authService.getToken()
    .then( token => {
      let url = `${galleryUrl}/${gallery._id}/pic`;
      let headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      };

      $log.debug('Uploading:', pic);

      return Upload.upload({
        url,
        headers,
        method: 'POST',
        data: {
          name: pic.name || ' ',
          desc: pic.desc || ' ',
          file: pic.file
        }
      });
    })
    .then( res => {
      //NOTE: slugram pushes.
      gallery.pics.unshift(res.data);
      return res.data;
    })
    .catch(errors);
  };

  return service;
}
