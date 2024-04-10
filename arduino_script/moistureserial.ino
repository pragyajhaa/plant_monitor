#include <ArduinoJson.h>
#define soil_moisture_pinn 4

void setup() {
  Serial.begin(9600);

}

void loop() {
  int val = analogRead(soil_moisture_pinn);
  int soil_moisture_pin = map(val, 2400, 4095, 100, 0);
  int time = 0;
  char snum[5];

  //JsonDocument doc;
  //doc[itoa(0, snum, 10)] = analogRead(soil_moisture_pin);
  Serial.println(soil_moisture_pin);
  delay(10000);
  //serializeJson(doc, Serial);
}