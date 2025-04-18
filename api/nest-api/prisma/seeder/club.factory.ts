import { PrismaClient } from "@prisma/client";

interface leagueData {
    name: string,
    clubs: Array<string>,
}

const LeagueData: leagueData[] = [
    {
        name: 'J1リーグ',
        clubs: [
            '鹿島アントラーズ',
            '浦和レッズ',
            '柏レイソル',
            'FC東京',
            '東京ヴェルディ',
            'FC町田ゼルビア',
            '川崎フロンターレ',
            '横浜F・マリノス',
            '横浜FC',
            '湘南ベルマーレ',
            'アルビレックス新潟',
            '清水エスパルス',
            '名古屋グランパス',
            '京都サンガF.C.',
            'ガンバ大阪',
            'セレッソ大阪',
            'ヴィッセル神戸',
            'ファジアーノ岡山',
            'サンフレッチェ広島',
            'アビスパ福岡'
        ]
    },
    {
        name: 'プレミアリーグ',
        clubs: [
            'アーセナル',
            'アストン・ヴィラ',
            'ボーンマス',
            'ブレントフォード',
            'ブライトン・アンド・ホーヴ・アルビオン',
            'チェルシー',
            'クリスタル・パレス',
            'エヴァートン',
            'フラム',
            'イプスウィッチ・タウン',
            'レスター・シティ',
            'リヴァプール',
            'マンチェスター・シティ',
            'マンチェスター・ユナイテッド',
            'ニューカッスル・ユナイテッド',
            'ノッティンガム・フォレスト',
            'サウサンプトン',
            'トッテナム・ホットスパー',
            'ウェストハム・ユナイテッド',
            'ウルヴァーハンプトン・ワンダラーズ'
        ]
    },
    {
        name: 'ラリーガ',
        clubs: [
            'アラベス',
            'アスレティック・ビルバオ',
            'アトレティコ・マドリード',
            'バルセロナ',
            'セルタ・デ・ビーゴ',
            'エスパニョール',
            'ヘタフェ',
            'ジローナ',
            'ラス・パルマス',
            'レガネス',
            'マジョルカ',
            'オサスナ',
            'ラージョ・バジェカーノ',
            'レアル・ベティス',
            'レアル・マドリード',
            'レアル・ソシエダ',
            'セビージャ',
            'バレンシア',
            'バリャドリード',
            'ビジャレアル'
        ]
    },
    {
        name: 'セリエA',
        clubs: [
            'アタランタ',
            'ボローニャ',
            'カリアリ',
            'コモ',
            'エンポリ',
            'フィオレンティーナ',
            'ジェノア',
            'インテル',
            'ユヴェントス',
            'ラツィオ',
            'レッチェ',
            'ミラン',
            'モンツァ',
            'ナポリ',
            'パルマ',
            'ローマ',
            'サッスオーロ',
            'トリノ',
            'ウディネーゼ',
            'ヴェネツィア'
        ]
    },
    {
        name: 'ブンデスリーガ',
        clubs: [
            'FCアウクスブルク',
            '1.FCウニオン・ベルリン',
            'VfLボーフム',
            'ヴェルダー・ブレーメン',
            'FCザンクトパウリ',
            'ボルシア・ドルトムント',
            'アイントラハト・フランクフルト',
            'SCフライブルク',
            '1.FCハイデンハイム',
            'TSG1899ホッフェンハイム',
            'ホルシュタイン・キール',
            'RBライプツィヒ',
            'バイエル・レバークーゼン',
            '1.FSVマインツ05',
            'ボルシア・メンヒェングラートバッハ',
            'バイエルン・ミュンヘン',
            'VfBシュトゥットガルト',
            'VfLヴォルフスブルク'
        ]
    },
    {
        name: 'リーガアン',
        clubs: [
            'パリ・サンジェルマン',
            'オリンピック・マルセイユ',
            'ASモナコ',
            'OGCニース',
            'リールOSC',
            'オリンピック・リヨン',
            'スタッド・レンヌ',
            'RCランス',
            'FCナント',
            'スタッド・ランス',
            'トゥールーズFC',
            'モンペリエHSC',
            'RCストラスブール',
            'AJオセール',
            'アンジェSCO',
            'ル・アーヴルAC',
            'スタッド・ブレスト29',
            'ASサンテティエンヌ'
        ]
    }
]

const prisma = new PrismaClient();
async function main() {
    try {
        await prisma.$transaction(async (tx) => {
            for (const league of LeagueData) {
                const createdLeague = await tx.league.create({
                    data: { league_name: league.name },
                });

                await tx.club.createMany({
                    data: league.clubs.map(club => ({
                        club_name: club,
                        league_id: createdLeague.id,
                    })),
                });
            }
        });
    } catch (error) {
        if (error.code === 'P2002') {
            console.error('重複エントリが検出されました:', error);
        }
        throw error;
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });