DROP TABLE IF EXISTS `post`;

CREATE TABLE `post` (
	`index`	bigint	NOT NULL,
	`title`	text	NULL,
	`content`	text	NULL,
	`writer`	varchar(255)	NULL,
	`password`	binary(16)	NULL,
	`created_at`	datetime	NULL,
	`updated_at`	datetime	NULL
);

DROP TABLE IF EXISTS `comment`;

CREATE TABLE `comment` (
	`index`	bigint	NOT NULL,
	`post_index`	bigint	NOT NULL,
	`reply_index`	bigint	NOT NULL,
	`content`	varchar(255)	NULL,
	`writer`	text	NULL,
	`created_at`	datetime	NULL
);

DROP TABLE IF EXISTS `keyword`;

CREATE TABLE `keyword` (
	`writer`	varchar(255)	NULL,
	`word`	varchar(255)	NULL
);

ALTER TABLE `post` ADD CONSTRAINT `PK_POST` PRIMARY KEY (
	`index`
);

ALTER TABLE `comment` ADD CONSTRAINT `PK_COMMENT` PRIMARY KEY (
	`index`
);

ALTER TABLE `comment` ADD CONSTRAINT `FK_post_TO_comment_1` FOREIGN KEY (
	`post_index`
)
REFERENCES `post` (
	`index`
);

ALTER TABLE `comment` ADD CONSTRAINT `FK_comment_TO_comment_1` FOREIGN KEY (
	`reply_index`
)
REFERENCES `comment` (
	`index`
);

