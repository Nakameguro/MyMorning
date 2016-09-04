# -*- coding: utf-8 -*-
require 'capybara'
require 'capybara/dsl'
require 'selenium-webdriver'

Capybara.run_server = false
Capybara.current_driver = :selenium
Capybara.app_host = "http://ekitan.com/"

module Crawler
  class Ekitan
    include Capybara::DSL

    def login
	  from = '赤坂(東京)'
	  to = 'みなとみらい'
      visit('/')

      fill_in "SFNAME",
        :with => "#{from}"
      fill_in "STNAME",
        :with => "#{to}"
      click_on "検索"
    end

    def report
      infoMap = {}
      info_from = {}
      info_to = {}

      within(:xpath, "//*[@summary='乗り換え経路詳細']") do
        time_from = all('.departure')[0].text
        st_from = all('.station_name')[0].text
        time_to = all('.arrival').last.text
        st_to = all('.station_name').last.text

        info_from.store("time", time_from)
        info_from.store("station", st_from)
        infoMap.store("info_from", info_from)
        info_to.store("time", time_to)
        info_to.store("station", st_to)
        infoMap.store("info_to", info_to)
      end

      infoMap

    end

  end
end

