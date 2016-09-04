# -*- coding: utf-8 -*-
require 'open-uri'
require './lib/logger.rb'
require './lib/fileIO.rb'
require './lib/analyze.rb'
require './lib/analyzeWithOpe_ekitan.rb'

### main ###
def appMain()

	# リソース定義
	indir = "#{Dir.pwd}/data/input"
	inFname = "#{indir}/in.dat"
	outdir = "#{Dir.pwd}/data/output"
	outFname = "#{outdir}/out.json"

	# ロギング
	log("current dir", Dir.pwd)
	log("input dir", indir)
	log("output dir", outdir)

	# 入力データ
	inputData = readFileAs2dArray(inFname)
	# 出力データ
	outputData = ''

	# 各サイトのパース＆出力
	for data in inputData
		name = data[0]       # サイト名
		url = data[1]        # URL
		keyword = data[2]    # パースワード
		urlPrefix = data[3]  # URLプレフィックス

		# パース
		outputData << "#{format_textAsJSON(name, url, parse(open(url, "r:UTF-8", &:read), keyword), urlPrefix)}"
	end

	# その他のサイト
    # 動作にはcapybara (2.8.1)のインストールが必要
    # TODO: selenium->poltergeist (1.10.0)
	crawler = Crawler::Ekitan.new
	crawler.login
	infoMap = crawler.report
	outputData << transformMapToJSON("ekitan", infoMap)

	# 出力
	writeToFile(outFname, outputData)
end
###########

# 実行
appMain()
