create table if not exists keyword (
    `index` int unsigned auto_increment primary key,
    writer varchar(255) null,
    word varchar(255) null
) charset = utf8mb4;
create table if not exists post (
    `index` int unsigned auto_increment primary key,
    title text not null,
    content text not null,
    writer varchar(255) not null,
    password varchar(255) not null,
    created_at timestamp default current_timestamp() not null on update current_timestamp(),
    updated_at timestamp default '0000-00-00 00:00:00' not null
) charset = utf8mb4;
create table if not exists comment (
    `index` int unsigned auto_increment primary key,
    post_index int unsigned not null,
    reply_index int unsigned null,
    content text not null,
    writer varchar(255) not null,
    created_at timestamp default current_timestamp() not null on update current_timestamp(),
    updated_at timestamp default '0000-00-00 00:00:00' not null,
    constraint comment_post_index_foreign foreign key (post_index) references post (`index`) on update cascade,
    constraint comment_reply_index_foreign foreign key (reply_index) references comment (`index`) on update cascade on delete
    set null
) charset = utf8mb4;
create index if not exists FK_comment_TO_comment_1 on comment (reply_index);
create index if not exists FK_post_TO_comment_1 on comment (post_index);
create fulltext index if not exists post_title_index on post (title);
create fulltext index if not exists post_writer_index on post (writer);