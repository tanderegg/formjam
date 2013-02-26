class { 'apt': 
	always_apt_update => true,
}

package {'ruby':
	require => Exec['apt_update'],
	ensure => present
}
class {'rvm':
	require => Package['ruby'],
}

rvm::system_user { vagrant: ; }


rvm_system_ruby {
  'ruby-2.0.0-p0':
    ensure => 'present',
    default_use => true;
}