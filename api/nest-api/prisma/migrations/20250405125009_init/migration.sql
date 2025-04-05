-- CreateTable
CREATE TABLE "users" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "email_verified_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "role_id" INTEGER NOT NULL,
    "profile_image" VARCHAR(255),
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leagues" (
    "id" BIGSERIAL NOT NULL,
    "league_name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "leagues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clubs" (
    "id" BIGSERIAL NOT NULL,
    "league_id" BIGINT NOT NULL,
    "club_name" VARCHAR(255) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "clubs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "favorites_clubs" (
    "id" BIGSERIAL NOT NULL,
    "user_id" BIGINT NOT NULL,
    "club_id" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "favorites_clubs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "match_reviews" (
    "id" BIGSERIAL NOT NULL,
    "reviewer_id" BIGINT NOT NULL,
    "home_team_id" BIGINT NOT NULL,
    "away_team_id" BIGINT NOT NULL,
    "match_date" DATE NOT NULL,
    "kick_off_at" TIME NOT NULL,
    "match_review_text" TEXT,
    "highlight_url" VARCHAR(255),
    "status" SMALLINT,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "match_reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" BIGSERIAL NOT NULL,
    "commentator_id" BIGINT NOT NULL,
    "match_review_id" BIGINT NOT NULL,
    "comment" VARCHAR(255) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "followings" (
    "id" BIGSERIAL NOT NULL,
    "following_id" BIGINT NOT NULL,
    "followed_id" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "followings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "likes" (
    "id" BIGSERIAL NOT NULL,
    "stamper_id" BIGINT NOT NULL,
    "match_review_id" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stocks" (
    "id" BIGSERIAL NOT NULL,
    "stocker_id" BIGINT NOT NULL,
    "match_review_id" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "stocks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "likes_stamper_id_match_review_id_key" ON "likes"("stamper_id", "match_review_id");

-- CreateIndex
CREATE UNIQUE INDEX "stocks_stocker_id_match_review_id_key" ON "stocks"("stocker_id", "match_review_id");

-- AddForeignKey
ALTER TABLE "clubs" ADD CONSTRAINT "clubs_league_id_fkey" FOREIGN KEY ("league_id") REFERENCES "leagues"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorites_clubs" ADD CONSTRAINT "favorites_clubs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorites_clubs" ADD CONSTRAINT "favorites_clubs_club_id_fkey" FOREIGN KEY ("club_id") REFERENCES "clubs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_reviews" ADD CONSTRAINT "match_reviews_reviewer_id_fkey" FOREIGN KEY ("reviewer_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_reviews" ADD CONSTRAINT "match_reviews_home_team_id_fkey" FOREIGN KEY ("home_team_id") REFERENCES "clubs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_reviews" ADD CONSTRAINT "match_reviews_away_team_id_fkey" FOREIGN KEY ("away_team_id") REFERENCES "clubs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_commentator_id_fkey" FOREIGN KEY ("commentator_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_match_review_id_fkey" FOREIGN KEY ("match_review_id") REFERENCES "match_reviews"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "followings" ADD CONSTRAINT "followings_following_id_fkey" FOREIGN KEY ("following_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "followings" ADD CONSTRAINT "followings_followed_id_fkey" FOREIGN KEY ("followed_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_stamper_id_fkey" FOREIGN KEY ("stamper_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_match_review_id_fkey" FOREIGN KEY ("match_review_id") REFERENCES "match_reviews"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stocks" ADD CONSTRAINT "stocks_stocker_id_fkey" FOREIGN KEY ("stocker_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stocks" ADD CONSTRAINT "stocks_match_review_id_fkey" FOREIGN KEY ("match_review_id") REFERENCES "match_reviews"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
