# -*- coding: utf-8 -*-

#
# ファイルへの書き込み
#
def writeToFile(fname, contents)
	File.open(fname, "w") do |file|
		file.puts(contents)
	end

	# エラーハンドリング
	rescue SystemCallError => e
		puts %Q(class=[#{e.class}] message=[#{e.message}])

	rescue IOError => e
		puts %Q(class=[#{e.class}] message=[#{e.message}])

end

#
# ファイル読み込み(2次元配列に格納)
#
def readFileAs2dArray(fname)
	# リターン値
	cont = []

	# 読み込み
	File.open(fname) do |file|
		file.each_line do |line|
			arr = line.split(",")
			cont.push(arr)
		end
	end

	cont

	# エラーハンドリング
	rescue SystemCallError => e
		puts %Q(class=[#{e.class}] message=[#{e.message}])

	rescue IOError => e
		puts %Q(class=[#{e.class}] message=[#{e.message}])

end
