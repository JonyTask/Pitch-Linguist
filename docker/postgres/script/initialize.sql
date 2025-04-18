-- 作成したDBへ切り替え
\c app_database

-- Timezoneの設定
SET timezone TO 'Asia/Tokyo';

-- スキーマ作成
CREATE SCHEMA appschema;

-- ロールの作成
CREATE ROLE NEWTYPE WITH LOGIN PASSWORD 'password';

-- 権限追加
GRANT ALL PRIVILEGES ON SCHEMA appschema TO NEWTYPE;