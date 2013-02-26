#!/bin/bash
rvm use ruby-2.0.0
gem install puppet
puppet module install puppetlabs/apt
puppet module install maestrodev/rvm
cd $(dirname $BASH_SOURCE)
mkdir modules
cd modules
ln -s ~/.puppet/modules