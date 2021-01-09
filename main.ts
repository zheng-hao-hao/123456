input.onGesture(Gesture.LogoUp, function () {
    _1.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    _1.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(score)
})
input.onGesture(Gesture.LogoDown, function () {
    _1.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    _1.change(LedSpriteProperty.X, 1)
})
let score = 0
let _1: game.LedSprite = null
_1 = game.createSprite(randint(0, 4), randint(0, 4))
let sprite = game.createSprite(randint(0, 4), randint(0, 4))
sprite.set(LedSpriteProperty.Brightness, 255)
_1.set(LedSpriteProperty.Brightness, 150)
basic.forever(function () {
    if (_1.isTouching(sprite)) {
        music.playTone(988, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
        score = score + 1
        sprite.delete()
        sprite = game.createSprite(randint(0, 4), randint(0, 4))
    }
})
