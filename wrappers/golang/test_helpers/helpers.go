package test_helpers

import (
	"math/rand"
)

func GenerateRandomLimb(size int) []uint32 {
	limbs := make([]uint32, size)
	for i := range limbs {
		limbs[i] = rand.Uint32()
	}
	return limbs
}

func GenerateLimbOne(size int) []uint32 {
	limbs := make([]uint32, size)
	limbs[0] = 1
	return limbs
}

func GenerateBytesArray(size int) ([]byte, []uint32) {
	baseBytes := []byte{1, 2, 3, 4}
	var bytes []byte
	var limbs []uint32
	for i := 0; i < size; i++ {
		bytes = append(bytes, baseBytes...)
		limbs = append(limbs, 67305985)
	}

	return bytes, limbs
}
