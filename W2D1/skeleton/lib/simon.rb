class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until @game_over
      take_turn
    end

    game_over_message
    reset_game
  end

  def take_turn
    unless @game_over
      show_sequence
      require_sequence

      unless @game_over
        round_success_message
        @sequence_length += 1
      end
    end
  end

  def show_sequence
    p add_random_color
  end

  def require_sequence
    puts "Repeat the sequence"
    player_input = gets.chomp

    player_seq = player_input.split(", ")
    @game_over = true unless player_seq == @seq
  end

  def add_random_color
    @seq << COLORS.sample
  end

  def round_success_message
    puts "Good now lets add another"
  end

  def game_over_message
    puts "Game Over"
  end

  def reset_game
    @seq = []
    @sequence_length = 1
    @game_over = false
  end
end

if __FILE__ == $PROGRAM_NAME
  simon = Simon.new
  simon.play
end
