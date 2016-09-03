# -*- coding: utf-8 -*-
require 'cgi'

#
# パース
#
def parse(page_source, key)
	url_titles = page_source.scan(%r!#{key}!)
	url_titles.map! {|(aurl, atitle)|[CGI.unescapeHTML(aurl), CGI.unescapeHTML(atitle)]}
end

#
# フォーマッティング(JSONフォーマット)
#
def format_textAsJSON(title, url, url_title_ary, urlPrefix)

	# JSON statement	
	s = "var site_#{title} : {\n"
	recNum = 1

	url_title_ary.each do |aurl, atitle|

		# JSON statement
		s << "\ttopic_#{recNum} : {\n"		

		# タイトル
		s << "\t\ttitle: " + '"' + "#{atitle}" + '"' + "\n"

		# URL
		fullUrl = "#{aurl}"
		fullUrl.gsub!(/" (.+)/, '')
		if !"#{aurl}".start_with?("http")
		   fullUrl = "#{urlPrefix}".chomp + fullUrl
		end
		s << "\t\t,url : " + '"' + "#{fullUrl}" + '"' + "\n"

		# JSON statement
		s << "\t},\n"

		recNum+=1

	end

	# JSON statement
	s << "}\n\n"

	s

end
