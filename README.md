# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# FLEAMARKET DB設計
## users テーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|
|family_name|string|null: false|
|family_name_kana|string|null: false, add_index: true|
|first_name|string|null: false|
|first_name_kana|string|null: false|
|birth_day|date|null: false|
### Association
- has_many :creditcards
- has_many :favorites
- has_many :destinations
- has_many :items
- has_many :comments

## creditcards テーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|card_id|string|null: false|
|customer_id|string|null: false|
### Association
- belongs_to :user

## destinations テーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|family_name|string|null: false|
|first_name|string|null: false|
|post_code|string|null: false|
|prefecture|string|null: false|
|city|string|null: false|
|town|string|null: false|
|block|string|
|phone_number|string|
### Association
- belongs_to :user

## items テーブル
|Column|Type|Options|
|------|----|-------|
|seller_id|integer|null: false, foreign_key: true|
|buyer_id|integer|foreign_key: true|
|item_name|string|null: false, add_index: true|
|description|text|null: false|
|price|integer|null: false|
|category_id|integer|null: false, foreign_key: true|
### Association
- has_many :favorites
- belongs_to :brand 
- belongs_to :category 
- has_many :images
- belongs_to :seller, class_name: "User"
- belongs_to :buyer, class_name: "User"
- has_many: comments

## categories テーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|ancestry|string|
### Association
- has_many :items
- has_ancestry

## brands テーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :items

## images テーブル
|Column|Type|Options|
|------|----|-------|
|item_id|integer|null: false, foreign_key: true|
|image|string|null: false|
### Association
- belongs_to :item

## favorites テーブル
|Column|Type|Options|
|------|----|-------|
|item_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :item
- belongs_to :user

## comments テーブル
|Column|Type|Options|
|------|----|-------|
|item_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|comment|text|null: false|
### Association
- belongs_to :item
- belongs_to :user
