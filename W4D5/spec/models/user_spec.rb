require 'rails_helper'
require 'spec_helper'


describe User, type: :model do
  # subject(:user) do
  #   FactoryGirl.build(:user,
  #     name: "jonathan",
  #     password: "good_password")

  subject(:user) {User.new(name: "Joe", password: "password")}

  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_length_of(:password).is_at_least(6) }
  end

  describe 'associations' do
    it { should have_many(:subs) }
    it { should have_many(:user_votes) }
    it { should have_many(:comments) }
  end

  describe 'class methods' do
    describe '#is_password?' do
      it 'should return false if wrong password' do
        expect(user.is_password?("hunter12")).to eq(false)
      end

      it 'should return true if right password' do
        expect(user.is_password?("password")).to eq(true)
      end
    end

    describe '#reset_session_token' do
      it 'changes user session_token' do
        old_session_token = user.session_token
        user.reset_session_token!
        expect(user.session_token).not_to eq(old_session_token)
      end
    end

    describe '::find_by_credentials' do
      before { user.save! }

      it 'should return nil if it cant find a user' do
        expect(User.find_by_credentials("Joe", "hunder12")).to eq(nil)
      end

      it 'should return the right user if it can' do
        expect(User.find_by_credentials("Joe", "password")).to eq(user)
      end
    end

  end
end
