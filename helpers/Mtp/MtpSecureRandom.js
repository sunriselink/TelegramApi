var _MtpSecureRandom = (function () {
    $(window).on('click keydown', rng_seed_time);
    return new SecureRandom();
})();