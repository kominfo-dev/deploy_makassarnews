'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3eb8d57fc46fc7a073501efeb537c534",
"index.html": "868b09ba8f39d91ce2d21be59ca7ae0b",
"/": "868b09ba8f39d91ce2d21be59ca7ae0b",
"main.dart.js": "2ea7e5813c15ec36c68617aef60704f7",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"README.md": "365cfe8645ac2ace9dbbf43129f95179",
"favicon.png": "c561ea87c20cd0dcefc12924b3c6ea66",
"icons/Icon-192.png": "3ed3c7ce5d8198070f0e027f84002a04",
"icons/Icon-maskable-192.png": "3ed3c7ce5d8198070f0e027f84002a04",
"icons/Icon-maskable-512.png": "4ba3835e29d9c1f8db6af59dddac0726",
"icons/Icon-512.png": "4ba3835e29d9c1f8db6af59dddac0726",
"manifest.json": "d41ccdac6c1b64b7d3941504e5ac1d1b",
".git/config": "49b4a0f40ab86fb331a1b9ef3fb64f9b",
".git/objects/61/697aee6c7f57872600be7352006c1989835feb": "6b86ad2bcc6bf7bacf421f00c3e9cc43",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/61/5855a6555e31d353048b73fb58443e8aefa8c9": "8a76336508051b7b63d97ae5a6a17050",
".git/objects/0d/1d848868fdb28e8d33dd980a80833722c0e705": "fe9ffc9b7a71231d8224ffca64373f8d",
".git/objects/0c/b55b8dfa90469c9bfd3e2fc9ab3d3d0777027c": "025ca2ad49e5affda71638904b58bf7c",
".git/objects/3e/a21ab72cfabb9e463ee745125f1f6b8db42c44": "026eaabac64781b1105fded993223ed8",
".git/objects/6f/6e589dcd5836bb56c85202b0906935b6cdeed2": "d79d4cda6bd2f5003c03e6f5e83ede6f",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/32/782ed884ac17fe6dfa929676ede8b87a2e493a": "63081b582d3a41b63b0cb1db520f0c79",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/3c/039a974f78af33becea255ed832d729b0a63c9": "d06d11d76e880969aeab3ad2b6577142",
".git/objects/67/46391a1a3c8305246b707e604da1ebcdf16a67": "a2eca0dd66b812b509fa7d3a93709f4d",
".git/objects/60/128cd9feb42ac1e117e8eb826af400c0f42ffc": "65a05d8645f5e60b9611c63212e81411",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9c/7488d52584248a1d151f762dbb864bbef9b67f": "5f3eecf1ae9029f5c7201248652dbc82",
".git/objects/9c/f5ffa54a4e01a6fb8609db3268d4d583c9ba48": "58b1fdb0626b008912d60d6dd32d43bc",
".git/objects/b2/9f43de46eb575753e29cf171dc5f4e9afb99f1": "a9a58d4e151fde917118806a3916b7ae",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b3/4124e55c760777795f8a86e99e970548fd3962": "2fbba71d94f8575254876cbc0f497cc0",
".git/objects/da/f388ecdf97531b19a63ce6be750a4f57600295": "976e98ad62d21eb16c02618f9c422e60",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/ae/a65e4bb061e62aad00363f4afeca8c53206575": "3a8b6bad55c14f39f7aeede7afd8f6e3",
".git/objects/d8/d190f20c3a18bf135825ce1e39b6b46c5b67e0": "66d584da290e3ac493ee7bb8080a37bd",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/3186cf659105a45b2ebef780c8677b91c9b33f": "57fca870e67bf3d14afb776ac1dafd66",
".git/objects/e5/38c60a5e3bffe03e0a2594b26e449f628ee8af": "1dc2f62e4948231bca3be0a8999cdb15",
".git/objects/c7/0396e9cd86976165e0b232764e6df84b90b9b5": "ab54b7a3d8582ab85329f8ed813f7432",
".git/objects/c9/48829b209c21b11ea91e66709521c2b7c13f91": "c652f8e675aad11836bea63c439412cc",
".git/objects/fc/ee511d4694159f469681c679a5bebc2b2244ae": "1bf35ca2a6459d2567a5facc7c838657",
".git/objects/f2/af392fd5137f368bee615714f30592db99033b": "953cf38116d9fa8d0ee1de08bf841208",
".git/objects/f5/a43e7c3a24f94c1edf89cafc02ccc6b8184850": "76e166d6f423bb41e633b511f28cb7b9",
".git/objects/cf/c0b27b670698366036f518b386b1f68a295d7a": "a81a43ac5e5b5ef7547883251f7c3d6a",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/27/c4fb0fea4796b244a5d69bac3ec9d255e39aff": "0bb9a9f1c41dd347d5a9b77e4f9475e2",
".git/objects/29/30b81361ed99978292d94748ae8cfef3089c6c": "008bcc798e197a39c5c9db49be6fd89b",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/89/acac21cc21d35739665c6ef83d77ad57e46613": "0bfa4d10d893a86ade9cf628ae2523fe",
".git/objects/1f/7f3e2a5e569c604f015e7b168a03154caf1e90": "2309a1f69802b87d30f0d25663bcd16e",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/80/a85c44ead641d9d3039c6209cdc716d2c58de1": "e27241558f922a4a1a431c66ae50772e",
".git/objects/74/d9a33c8a057dc840eda45bf60a905518291ded": "744b27474adb4cb0aff6d25d9eaee6e0",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/17/744a48681753ef0c3baa0be7a75df1cc1a8449": "eac02bbc29c105718519bf85cbcfef38",
".git/objects/10/18b044b9ba263a3ed5f14b3838af87c22f2744": "c2cb76fa89ca6648e843d3fdbf3ea402",
".git/objects/4c/95b406eeef2878bbca6669d74ea11eb877020b": "f8d1c2b2da51cd6714043ddab429063c",
".git/objects/26/06a534644f2d3bf91d616166def77a4034e9e6": "ccd775c965663580e37845bf18af05ec",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/81/d0aafe788453db3bf83a64b9238fc734db55a7": "4a0884340110c8c8eaf7b22390da2358",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/07/d1736353dec02bae5a6296183df2d5d58345b7": "f7af052781e7387fa4a47f5451d26263",
".git/objects/9a/dada1e5e1d6647fec4b8e8fdbe584209607228": "8665ef8887e58a968a91c87959708d10",
".git/objects/09/c6f30a132cf893c19db2413373973d661f4f39": "db89f1f2334c62c69d6ccfa69711a1bf",
".git/objects/65/ede6efd7290266a0383a2d3b8621d6a4371b5f": "12660cacd6221e56205e36b1abdf29f9",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/3a/ce84dea034c4cace0d8322ec09c1a59028bc80": "c3186da8f9d94114a97db7984163c7be",
".git/objects/54/89ed9e7e275fba13e19b1741bc3e16ea714792": "42ab58b63349b703df0d3d44a6c0031b",
".git/objects/3f/25139b7f13311c8b29a8d8d500014fe3eb34b9": "0a4018d7e640489034214eb247339d0e",
".git/objects/3f/61230143d7d727beb0e564d13fed4c744cceec": "07be5298d3c9a4ac2c7881a829762437",
".git/objects/30/8e19e127a96f0547e6782f5b1024e06ecfd246": "97eb1831501429685e6aa3444ae24562",
".git/objects/5e/10a835c1bb4d43a171cfe387e169cebc7ab76d": "554ae99ce81bbf1454bc326b2c8e63e9",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/45caaa51a53a5763d0b0df0dbd07605af91db0": "05145e596fd86411df5dd4d599c44f85",
".git/objects/99/f055805055e002836de8fce556c6081a4dec1f": "7681694ce398d5228dde4f95f86d2d77",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/0f/ceb20b3ed22f1960ba687161822ce522589b2c": "f5f256506f9516a54c3ebac0925ec753",
".git/objects/64/d5534a3273b055ac2a2a614ffa0884dfca9efa": "0c30c14d195d7d26ef605c8cf8cb58ba",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/a7/7014200ad165494e4d7841a7d1c87a595138d9": "85637d7baf4eac7f46b67ff581f3c8be",
".git/objects/b8/f28c45176fd1a4c0a58e7e3bad8b4069fa3ea6": "26c0124c46eeab4ccfa055d5c97c9744",
".git/objects/b8/c1a9c9043c3eac180bd7acc8bc8b752d0bdf5f": "8afce62971292dff216dbe97b1e23fe1",
".git/objects/dd/5c0d3ac4dc74a75a359686c127ab58dceb9332": "870574f3094481e2b43feb88a51ffdef",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/d2/c50312afad31d2c8cf0ddcdb667b6a2e3cea32": "2e55b5ad840b38c3746d14eda0c30c91",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/b7/ff41dedae2e4618bbfffeea8b11417eac529c5": "49b3c4c9a5f939fe9cedc3f74bfb12e3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/bce78dcb7f7c1ae83cbbb41f455f7093a4168f": "a805400d1a758621aa2895f109d25ffc",
".git/objects/c4/819183b32f74fd1218d67787f00e9ed3160229": "828afe244e1c5051f5376f583151a047",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/e6/598cc6ddfa3c271adb1e68b492c751f3753706": "1487d24fa521509f77bd9d19618107d4",
".git/objects/f9/8a2d3504d10dbfeaa1cb6e3c5e6826613e52f8": "1c8d21ad2514097f804a24ecd3c1fed9",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/1b/7188b4927cf6f65a0044fd9d51b80bd9409b1c": "d03a2423d6b575c0a62edcf55bf414e0",
".git/objects/48/b0246e91d6b310a02f8a16ffffa85fe547c434": "2edfd108a6acca72151d75df06a06af4",
".git/objects/1e/d7c395427329bf28d8dc90f3ff874ed57847d4": "282e0e65240486a9f2d848167d380d0b",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/24/4f799f240df948b05ffd6fcc3a5b18358c8617": "a6c48d45f91e9c6de51dc69ca8951b69",
".git/objects/8d/74565aa08364a675355ab70097e3aada444665": "56266c6d586c300b74fa6ade9f21adce",
".git/objects/12/0bfb423ef21c36f1b93189c4425147f796b7d8": "75f2966ef15ce2c32dbaddc982a7f093",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/94602ad97e39ac14124c024c9007d6764509d1": "04b9f31742ba66857acb080c69f0d1ad",
".git/objects/1d/7b861f2b8cdebcd6931c0dde79cabbbd5d294a": "efa30e79ef4a45fa500dbac328390990",
".git/objects/1d/ce826b5818e664a49dcc7fdfd1349e29e6704a": "697fd3f14105ec250e0b5aac0cb807ab",
".git/objects/71/0fad74aeb3dc96a663814f4f59084ecbfb3102": "8b11448b16ade654c57e4d86a99c8872",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/2e/5d764e593b37e8caf6bdf8f95e55791fac71e9": "b6fe4663d89a815d37b577f2e9e15bd1",
".git/objects/2b/89d2ae539428a5649ee4dfdee58e5d0e1ce21f": "ba4cbc6fd375188de3dbd3c0ac69c01e",
".git/objects/7f/35eb141abb76a1b018411b044ef1ec65854a04": "ea1ec896f7bea0566a654333f4da2b11",
".git/objects/7a/ba84f781036d8b8c346293cf167b70daf951e3": "ba59a720c90310db498b5af54cb0729e",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/8e/fedd18a1d73eba383a5be583637747d9950462": "d6ed0301d5ccb6ae08e5c2b73ec06555",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d48ad36439ec78f507f630a05144eeb3",
".git/logs/refs/heads/main": "ce026cd2d72bd479a14b9b16ea028994",
".git/logs/refs/remotes/origin/main": "96cb8d58bf138f83d91b2b14d9f8a61c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f0a9c94e9a753928fc5affc856b578af",
".git/refs/remotes/origin/main": "f0a9c94e9a753928fc5affc856b578af",
".git/index": "2be2d98d85cb0f501b75e52b58a3f2a2",
".git/COMMIT_EDITMSG": "870c06c00566c4fb1861bb10f34d1904",
"assets/AssetManifest.json": "2beadec5d56b4fd9b99ffc8912c4e3aa",
"assets/NOTICES": "301145abfe3494e148f18623f12234b8",
"assets/FontManifest.json": "71a4a82de411f155107da3f8dac64ebd",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/gadget.png": "cfc1bde7bb91c69326e628f8309d53d0",
"assets/assets/images/logoMKS3.png": "2dbd3d33556a156a1a50c093b70c8f50",
"assets/assets/images/logoMKS2.png": "ea2a1e50b8893e6cf52567eaab3a7422",
"assets/assets/images/logotagline.png": "0ba3a0d453118a59c4571c98bc343fcc",
"assets/assets/images/menubutton.png": "d643d5921ecb67d463df35d281726242",
"assets/assets/images/logoheader.png": "60e9bfc10572b590c9158de73e741c11",
"assets/assets/images/logoMks4.png": "1ac6923a00b110bcc6cc24b4cc24b4d8",
"assets/assets/images/logoapp.png": "1ca54bceea0a7364940cb6b7710d79b5",
"assets/assets/images/flutter.png": "d25c90d70ce7910bd4f14caf6e52d35b",
"assets/assets/images/smartphone.png": "ad9b00b3202e157dbd4f318dc0d006ea",
"assets/assets/images/lontara.png": "7d979e344bfa2e9efc998463bd206ba3",
"assets/assets/images/logo_header.png": "530e8bc121b6a86015634835654e9d98",
"assets/assets/images/sofa.png": "a453a110c6c2fa0d428026964c5389f0",
"assets/assets/images/ic_layanan.png": "1987bfefa598ca1f17a6fd1247f195d6",
"assets/assets/images/logo1.png": "e0dd5cf2ec71ba2aa0bd759432440f40",
"assets/assets/images/logoict.png": "e3f6b717ea5f4ca6e9dd4892d3bc23c3",
"assets/assets/images/logo.png": "c876aa957ad7038d59785a57f1926c4a",
"assets/assets/images/logo2.png": "7360130caa8e51126213975cb9eca39a",
"assets/assets/images/laptop.png": "cc72498205d7166da49dd5f265de9d53",
"assets/assets/images/ic_saran.png": "f4939061408d5d092626d6a6a3c2ba64",
"assets/assets/images/powered_by.png": "534405a1df3af26fb9348a8e56aec9d0",
"assets/assets/images/job.png": "52573573b642eea45661a5b2120348f9",
"assets/assets/images/icon/yt_ic.png": "0c267da81b378c5d6bc1d9834e35ab64",
"assets/assets/images/icon/ig_ic.png": "fa90e1e7734e5bef1193daca074ad67c",
"assets/assets/images/icon/tw_ic.png": "400dc88500c0bc5e11f6c953dedcc7ab",
"assets/assets/images/icon/fb_ic.png": "1091b48d66f2bacb7672db240d2fcd8d",
"assets/assets/images/google.png": "d8625b338b13c0a1703ae2cd0059540f",
"assets/assets/images/ic_survey.png": "c80cf1c1c5e2c7959b08d726afdaa069",
"assets/assets/images/slide.png": "33803406388767ee3e911d9daeebcb7b",
"assets/assets/images/ic_data.png": "4b68814460f07598f6e7ea87b2725c54",
"assets/assets/images/welcome.png": "e0f51116dcbe59377b655a5ae8039f9d",
"canvaskit/skwasm.js": "2e9d3b68c4c4b1d4154eaa08598dc048",
"canvaskit/skwasm.wasm": "374033d89d5c38fe6af6bb61a1c8ae13",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "1f952c5dc1c1aff2d177be5a9fc0e9ec",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
