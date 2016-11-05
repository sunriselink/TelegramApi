function MtpSecureRandomModule($) {
    $(window).on('click keydown', rng_seed_time);
    return new SecureRandom();
}

MtpSecureRandomModule.dependencies = [
    'jQuery'
];
